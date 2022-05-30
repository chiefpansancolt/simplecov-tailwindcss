# frozen_string_literal: true

lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'simplecov-tailwindcss/version'

Gem::Specification.new do |spec|
  spec.name = 'simplecov-tailwindcss'
  spec.version = SimpleCov::Formatter::TailwindFormatter::VERSION
  spec.authors = ['Christopher Pezza']
  spec.email = ['chiefpansancolt@gmail.com']
  spec.summary = 'HTML Tailwind Design View for Simplecov formatter'
  spec.description =
    'HTML Tailwind Design View of Simplecov as a formatter' \
      'that is clean, easy to read.'
  spec.homepage = 'https://chiefpansancolt.live/docs/simplecov_tailwind/'
  spec.license = 'MIT'

  spec.required_ruby_version = '>= 2.5.0'

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] =
    'https://github.com/chiefpansancolt/simplecov-tailwindcss'
  spec.metadata['changelog_uri'] =
    'https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/master/CHANGELOG.md'
  spec.metadata['bug_tracker_uri'] =
    'https://github.com/chiefpansancolt/simplecov-tailwindcss/issues'

  spec.files = `git ls-files`.split("\n")
  spec.bindir = 'bin'
  spec.test_files = `git ls-files -- {test,spec,features}/*`.split("\n")
  spec.executables =
    `git ls-files -- bin/*`.split("\n").map { |f| File.basename(f) }
  spec.require_paths = ['lib']

  spec.add_dependency 'simplecov', '~> 0.16'
end