---
sidebar_position: 7
keywords: basics, testing, runtime
---

# Setting up tests for your pallet

_Get into the habit of writing tests as you write your pallet &mdash; it's good practice!_

## Goal

Learn how to setup the scaffolding required to write tests for your pallet.

## Use cases

Writing and running unit tests for a pallet.

## Overview

This guide steps through how to use `mock.rs` and `test.rs` as a basis for testing your pallet. We'll be
using the node template for the scaffolding of the `mock.rs` file and an arbitrary pallet &mdash; called `pallet-testing`
&mdash; to give this guide some context. This pallet will contain a single function called `add_value`, that takes an origin and
a `u32` and returns `Ok(())` if the value is less than or equal to a constant called `MaxValue` that we specify in the mock runtime.

## Steps

### 1. Use the template node as boilerplate

Inside `pallet-testing/src`, the first thing we need to do is create two empty files: `mock.rs` and `tests.rs`.

Paste in the contents from [`template/src/mock.rs`][template-node-mock-rs]. We'll use this as boilerpate
which we'll customize for our `pallet-testing` pallet.

### 2. Create a mock runtime to test your pallet

Start by modifying `pallet-testing/src/mock.rs` to include the `pallet-testing` pallet. This involves changes in the following code sections:

#### Dependencies

Replace the first line with the name of the pallet, in our case `pallet_testing`:

```rust
use crate as pallet_testing;
/*--snip--*/
```

#### Configure mock runtime

In `frame_support::construct_runtime!`, replace `pallet_template` with the name of your pallet, in our
case `pallet_testing`:

```rust
/*--snip--*/
	TestingPallet: pallet_testing::{Module, Call, Storage, Event<T>},
/*--snip--*/
```

#### Implement your pallet for the mock runtime

Replace `impl pallet_template::Config for Test {...}` with the your configuration types and any
constant values your pallet requires:

```rust
parameter_types! {
	pub const MaxValue: u32 = 50;
}

impl pallet_testing::Config for Test {
	type Event = Event;
	type MaxValue = MaxValue;
}
```

To put the mock runtime to use, we need to set up our `tests.rs` file for the `pallet-testing` pallet.

### 3. Setup and create tests

In `tests.rs`, start by importing the dependencies you'll need from `lib.rs` using `super`:

```rust
use super::*;
```

#### Testing that errors work

This will test whether the error works as intended:

```rust
#[test]
fn error_works(){
	new_test_ext().execute_with(|| {
		assert_err!(
			TestingPallet::add_value(Origin::signed(1), 51),
			"value must be <= maximum add amount constant"
		);
	})
}

```

#### Testing known working case

Create a test that should work:

```rust
#[test]
fn test_should_work() {
	new_test_ext().execute_with(|| {
		assert_ok!(
			TestingPallet::add_value(Origin::signed(1), 10)
		);
	})
}
```

#### Testing known failing case

And another that should fail:

```rust
#[test]
fn test_should_fail() {
	new_test_ext().execute_with(|| {
		assert_ok!(
			TestingPallet::add_value(Origin::signed(1), 100)
		);
	})
}
```

### 4. Run your tests

Execute the following command from your pallet's directory:

```bash
cargo test
```

## Examples

- [template pallet tests](https://github.com/substrate-developer-hub/substrate-node-template/blob/master/pallets/template/src/tests.rs#L1-L23)
- [reward-coin tests](https://github.com/sacha-l/substrate-how-to-guides/blob/main/how-to-substrate/example-code/template-node/pallets/reward-coin/src/tests.rs#L1-L38)

## Related material

#### Guides

- [Testing a transfer function](./test-transfer)
- [Migration tests](../storage-migrations/migration-tests)

#### Knowledgebase

- [Mock runtime][mock-runtime]

#### Rust docs

- [`assert_ok!`](https://substrate.dev/rustdocs/v3.0.0/frame_support/macro.assert_ok.html)
- [`assert_err!`](https://substrate.dev/rustdocs/v3.0.0/frame_support/macro.assert_err.html)

[template-node-mock-rs]: https://github.com/substrate-developer-hub/substrate-node-template/blob/467927bda05a56dfe57690aec93ff504a6009daa/pallets/template/src/mock.rs#L1-L61
[template-node-mock-rs]: https://github.com/substrate-developer-hub/substrate-node-template/blob/467927bda05a56dfe57690aec93ff504a6009daa/pallets/template/src/tests.rs#L1-L23
[mock-runtime]: https://substrate.dev/docs/en/knowledgebase/runtime/tests#mock-runtime-environment
