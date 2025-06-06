/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findDestination } from 'core/helpers/sync-destinations';

import type Store from '@ember-data/store';
import type { DestinationType } from 'vault/sync';

interface Params {
  type?: DestinationType;
}

export default class SyncSecretsDestinationsCreateDestinationRoute extends Route {
  @service declare readonly store: Store;

  model(params: Params) {
    const { type } = params;
    const defaultValues = findDestination(type)?.defaultValues;
    return this.store.createRecord(`sync/destinations/${type}`, { type, ...defaultValues });
  }
}
