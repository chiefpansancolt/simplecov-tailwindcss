# frozen_string_literal: true

require "simplecov"

SimpleCov.start do
  enable_coverage :branch
  add_filter "/test/"
  add_group "Library", "/lib"
end

SimpleCov.formatters = [
  SimpleCov::Formatter::TailwindFormatter
]

$LOAD_PATH.unshift File.expand_path("../lib", __dir__)
require "minitest/autorun"
require "minitest/pride"
require "mocha/minitest"
