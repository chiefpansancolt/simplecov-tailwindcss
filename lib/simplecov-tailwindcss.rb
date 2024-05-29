# frozen_string_literal: true

require "erb"
require "cgi"
require "fileutils"
require "digest/sha1"

# Ensure we are using a compatible version of SimpleCov
major, minor, patch = SimpleCov::VERSION.scan(/\d+/).first(3).map(&:to_i)
if major.negative? || minor < 9 || patch.negative?
  raise "The version of SimpleCov you are using is too old. " \
        "Please update with `gem install simplecov` or `bundle update simplecov`"
end

module SimpleCov
  module Formatter
    class TailwindFormatter # rubocop:disable Metrics/ClassLength
      def initialize
        @branchable_result = SimpleCov.branch_coverage?
      end

      def format(result)
        File.open(File.join(output_path, "index.html"), "wb") do |file|
          file.puts template("main").result(binding)
        end
        puts output_message(result)
      end

      def output_message(result)
        "Coverage report generated for #{result.command_name} to " \
          "#{output_path}. #{result.covered_lines} / #{result.total_lines} LOC " \
          "(#{result.covered_percent.round(2)}%) covered."
      end

      def branchable_result?
        @branchable_result
      end

      def line_status?(source_file, line)
        if branchable_result? &&
           source_file.line_with_missed_branch?(line.number)
          "missed-branch"
        else
          line.status
        end
      end

      private

      def template(name)
        ERB.new(
          File.read(
            File.join(File.dirname(__FILE__), "../views/", "#{name}.erb")
          )
        )
      end

      def output_path
        SimpleCov.coverage_path
      end

      def assets_path(name)
        File.join(
          "./dist",
          SimpleCov::Formatter::TailwindFormatter::VERSION,
          name
        )
      end

      def inline_public_asset(name)
        File.read(File.join(File.dirname(__FILE__), "../public/", name))
      end

      def generate_dialog(file)
        template("dialog").result(binding)
      rescue Encoding::CompatibilityError => e
        puts "Encoding problems with file #{file.filename}. Simplecov/ERB " \
             "can't handle non ASCII characters in filenames. Error: " \
             "#{e.message}."
      end

      def generate_stat_card(title, stat, color)
        template("stat_card").result(binding)
      end

      def generate_file_detail(file)
        template("file_detail").result(binding)
      end

      # rubocop:disable Lint/SelfAssignment
      def generate_group_page(title, files, created_date)
        title_id = title.gsub(/^[^a-zA-Z]+/, "").gsub(/[^a-zA-Z0-9\-_]/, "")
        title_id = title_id
        template("group_page").result(binding)
      end

      def remove_spaces(name)
        name.gsub(/^[^a-zA-Z]+/, "").gsub(/[^a-zA-Z0-9\-_]/, "")
      end

      # rubocop:enable Lint/SelfAssignment
      def format_number(number)
        whole, decimal = number.to_s.split(".")
        whole_with_commas =
          whole.chars.to_a.reverse.each_slice(3).map(&:join).join(",").reverse
        [whole_with_commas, decimal].compact.join(".")
      end

      def coverage_class(covered_percent)
        if covered_percent > 90
          "text-green-500"
        elsif covered_percent > 80
          "text-yellow-500"
        else
          "text-red-500"
        end
      end

      def coverage_badge_class(covered_percent)
        if covered_percent > 90
          "bg-green-500 text-slate-800"
        elsif covered_percent > 80
          "bg-yellow-500 text-slate-600"
        else
          "bg-red-500 text-slate-100"
        end
      end

      def strength_class(covered_strength)
        if covered_strength > 1
          "text-green-500"
        elsif covered_strength == 1
          "text-yellow-500"
        else
          "text-red-500"
        end
      end

      def line_coverage_class(status)
        case status
        when "covered"
          "border-green-500 odd:bg-green-400 even:bg-green-300"
        when "missed"
          "border-red-500 odd:bg-red-400 even:bg-red-300"
        when "skipped"
          "border-yellow-500 odd:bg-yellow-400 even:bg-yellow-300"
        else
          "border-slate-900 odd:bg-slate-200 even:bg-slate-100 dark:odd:bg-slate-700 dark:even:bg-slate-600"
        end
      end

      def code_coverage_class(status)
        case status
        when "covered", "missed", "skipped"
          "text-slate-900"
        else
          "text-slate-900 dark:text-slate-200"
        end
      end

      def branch_enabled_class
        if branchable_result?
          "mb-16"
        else
          "mb-12"
        end
      end

      def id(source_file)
        Digest::SHA1.hexdigest(source_file.filename)
      end

      def shortened_filename(file)
        file.filename.sub(SimpleCov.root, ".").gsub(%r{^\./}, "")
      end

      def hide_show(title)
        title == "All Files" ? "" : "hidden"
      end
    end
  end
end

$LOAD_PATH.unshift(File.join(File.dirname(__FILE__)))
require "simplecov-tailwindcss/version"
