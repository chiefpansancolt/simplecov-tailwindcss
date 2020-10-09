# frozen_string_literal: true

require "test_helper"
require "simplecov"
require "simplecov-tailwindcss"
require "simplecov-tailwindcss/version"

class SimplecovTailwindcssTest < Minitest::Test
  def test_defined
    assert defined?(SimpleCov::Formatter::TailwindFormatter)
    assert defined?(SimpleCov::Formatter::TailwindFormatter::VERSION)
  end

  def test_version
    version = SimpleCov::Formatter::TailwindFormatter::VERSION

    assert(!version.nil?)
  end

  def test_execution # rubocop:disable Metrics/MethodLength
    @original_result = {
      source_fixture("sample.rb") => [nil, 1, 1, 1, nil, nil, 1, 1, nil, nil],
      source_fixture("app/models/user.rb") => [
        nil, 1, 1, 1, nil, nil, 1, 0, nil, nil
      ],
      source_fixture("app/controllers/sample_controller.rb") => [
        nil, 1, 1, 1, nil, nil, 0, 0, nil, nil
      ]
    }

    @result = SimpleCov::Result.new(@original_result)
    SimpleCov::Formatter::TailwindFormatter.new.format(@result)

    assert(File.exist?("/#{SimpleCov.coverage_path}/index.html"))
  end

  def source_fixture(filename)
    File.expand_path(File.join(File.dirname(__FILE__), "fixtures", filename))
  end
end
