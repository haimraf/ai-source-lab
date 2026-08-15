/**
 * Compares a content record against its claim record without demanding that an
 * absent optional field be present-and-undefined.
 *
 * `claimRecords` is built in `claims-db.ts`, where line 46 always assigns
 * `coverImage: getClaimCoverImage(claim)` — so the key exists on every record,
 * holding `undefined` whenever a claim has no cover image. The content records
 * in `content/claims/*.ts` are written by hand and simply leave the field out.
 *
 * For an optional field those are the same fact. `claim.coverImage` evaluates to
 * `undefined` either way, and nothing at runtime can tell them apart. Vitest 4's
 * `toMatchObject` can: an expected property explicitly set to `undefined`
 * requires the received object to *have* that key. That is what turned four
 * assertions red across three files, all with the same one-line diff.
 *
 * So the expectation is narrowed to the properties that actually carry a value.
 * The alternative — making `claims-db` stop emitting the key, or adding
 * `coverImage: undefined` to twenty hand-written content files — would change
 * real data to satisfy a matcher's opinion about absent keys. The assertion is
 * what was imprecise, so the assertion is what changed.
 *
 * This deliberately does not weaken the check. Every defined property is still
 * compared exactly; only keys whose expected value is `undefined` are dropped,
 * and a key holding `undefined` asserts nothing in the first place.
 *
 * ---
 *
 * A finding worth more than the fix, recorded here because it was found while
 * making these three assertions pass and should not be lost in a green tick.
 *
 * `claimRecords` is not an independent source. `claims-db.ts:33` builds it as
 * `claimContentRecords.map(...)` — a projection of the very records these tests
 * compare against it. So the three parity assertions using this helper compare
 * a content record to a copy of itself, and **cannot fail on content drift**.
 *
 * That was verified rather than reasoned about: with `kicker` in
 * `ai-as-source-pyramids.ts` changed to a deliberate mismatch, the full suite
 * still reported 165 passing. Both sides moved together.
 *
 * They are not useless — they still catch a field being dropped from the
 * projection in `claims-db.ts`. But their names promise metadata parity between
 * two sources, and there is only one source. Making them meaningful means
 * comparing against something independent, which is a change to the suite's
 * design and belongs in its own pull request, not smuggled into a fix for a
 * matcher artifact.
 */
export function definedMetadata<T extends object>(record: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(record).filter(([, value]) => value !== undefined),
  ) as Partial<T>;
}
