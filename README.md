# Simplecov Tailwind

[![GitHub](https://img.shields.io/github/license/chiefpansancolt/simplecov-tailwindcss?label=License&style=flat-square)](/LICENSE)
[![GitHub Workflow Tests Status](https://img.shields.io/github/actions/workflow/status/chiefpansancolt/simplecov-tailwindcss/tests.yml?label=Tests&logo=github&style=flat-square)](https://github.com/chiefpansancolt/simplecov-tailwindcss/actions/workflows/tests.yml)
[![GitHub Workflow Builds Status](https://img.shields.io/github/actions/workflow/status/chiefpansancolt/simplecov-tailwindcss/builds.yml?label=Build&logo=github&style=flat-square)](https://github.com/chiefpansancolt/simplecov-tailwindcss/actions/workflows/builds.yml)
[![GitHub Workflow Lints Status](https://img.shields.io/github/actions/workflow/status/chiefpansancolt/simplecov-tailwindcss/lints.yml?label=Lints&logo=github&style=flat-square)](https://github.com/chiefpansancolt/simplecov-tailwindcss/actions/workflows/lints.yml)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/chiefpansancolt/simplecov-tailwindcss?label=Release&logo=github&style=flat-square)](https://github.com/chiefpansancolt/simplecov-tailwindcss/releases)
[![Gem](https://img.shields.io/gem/v/simplecov-tailwindcss?color=orange&label=Gem%20Version&logo=rubygems&style=flat-square)](https://rubygems.org/gems/simplecov-tailwindcss)
[![Discord](https://img.shields.io/discord/450095227185659905?label=Discord&logo=discord&style=flat-square)](https://discord.gg/pBxGpfrmD4)

> Note: To learn more about SimpleCov, check out the main repo at https://github.com/colszowka/simplecov

Generates a HTML Tailwind Design report generated from Simplecov using ruby 2.5 or greater.

## Installing

Add the below to your Gemfile to make Simplecov Material available as a formatter for your application.

### Ruby Gems Host

```ruby
# ./Gemfile

group :test do
  gem 'simplecov', require: false
  gem 'simplecov-tailwindcss', require: false
end
```

### Github Rubygems Host

```ruby
# ./Gemfile

group :test do
  gem "simplecov", require: false
end

source "https://rubygems.pkg.github.com/chiefpansancolt"
  group :test do
    gem "simplecov-tailwindcss", require: false
  end
end
```

## Usage

To use Simplecov Tailwind you will need to ensure your Formatter is set to use Simplecov Tailwind.

In your helper ensure your line about formatter usage is one of the following.

Ensure to add the require tag at the top of your helper class where Simplecov is configured

```ruby
require 'simplecov-tailwindcss'
```

**Single Formatter Usage:**

```ruby
SimpleCov.formatter = SimpleCov::Formatter::TailwindFormatter
```

**Multi Formatter Usage:**

```ruby
SimpleCov.formatters =
  SimpleCov::Formatter::MultiFormatter.new(
    [SimpleCov::Formatter::HTMLFormatter, SimpleCov::Formatter::TailwindFormatter],
  )
```

## Change Log

Check out the [Change Log](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/CHANGELOG.md) for new breaking changes/features/bug fixes per release of a new version.

## Contributing

Bug Reports, Feature Requests, and Pull Requests are welcome on GitHub at https://github.com/chiefpansancolt/simplecov-tailwindcss. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/.github/CODE_OF_CONDUCT.md) code of conduct.

To see more about Contributing check out this [document](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/.github/CONTRIBUTING.md).

- Fork Repo and create new branch
- Once all is changed and committed create a pull request.

**Ensure all merge conflicts are fixed and CI is passing.**

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `yarn test` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

When working with CSS or JS ensure to run `yarn build` to compile tailwind and JS to the public folder. This will ensure you have the latest CSS and JS used when testing locally.

_**NOTE: Do not commit any changes made in public folder from compiling as this will be performed by the owner before building of a release.**_

To test locally run `yarn test` and a webpage will open after tests are complete and you will be able to see the page.

To install this gem onto your local machine, run `yarn gem:build`. Gems will be built/release by Owner.

## License

Simplecov Tailwind is available as open source under the terms of the [MIT License](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/LICENSE).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://chrispezza.me"><img src="https://avatars3.githubusercontent.com/u/5841177?v=4" width="100px;" alt=""/><br /><sub><b>Christopher Pezza</b></sub></a><br /><a href="https://github.com/chiefpansancolt/simplecov-tailwindcss/commits?author=chiefpansancolt" title="Code">💻</a> <a href="https://github.com/chiefpansancolt/simplecov-tailwindcss/commits?author=chiefpansancolt" title="Documentation">📖</a> <a href="#tool-chiefpansancolt" title="Tools">🔧</a> <a href="https://github.com/chiefpansancolt/simplecov-tailwindcss/commits?author=chiefpansancolt" title="Tests">⚠️</a> <a href="#maintenance-chiefpansancolt" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
