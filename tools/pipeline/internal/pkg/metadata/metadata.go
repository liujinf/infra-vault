// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: BUSL-1.1

package metadata

var CeEditions = []string{
	"ce",
	"oss",
}

var EntEditions = []string{
	"ent",
	"enterprise",
	"ent.fips1402",
	"ent.fips1403",
	"ent.hsm",
	"ent.hsm.fips1402",
	"ent.hsm.fips1403",
}

var Editions = append(CeEditions, EntEditions...)
