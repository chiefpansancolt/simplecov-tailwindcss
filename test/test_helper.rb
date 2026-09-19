# frozen_string_literal: true

require "simplecov"

simplecov_modern_api = SimpleCov::VERSION.scan(/\d+/).first.to_i >= 1

SimpleCov.start do
  enable_coverage :branch

  if simplecov_modern_api
    skip "/test/"
    group "Library", "/lib"
    10.times { |i| group "Test #{i + 1}", "/lib" } if ENV["TEST_LONG_LIST_OF_GROUPS"]
  else
    add_filter "/test/"
    add_group "Library", "/lib"
    10.times { |i| add_group "Test #{i + 1}", "/lib" } if ENV["TEST_LONG_LIST_OF_GROUPS"]
  end
end

SimpleCov.formatters = [
  SimpleCov::Formatter::TailwindFormatter
]

$LOAD_PATH.unshift File.expand_path("../lib", __dir__)
require "minitest/autorun"
require "minitest/pride"
require "mocha/minitest"
