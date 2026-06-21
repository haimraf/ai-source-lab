import type { ClaimContent } from "../../lib/content/claim-schema";
import { fifteenMinuteCityPrisonClaimContent } from "./15-minute-city-prison";
import { agenda2030SevenStepsClaimContent } from "./agenda-2030-seven-steps";
import { aiAsSourcePyramidsClaimContent } from "./ai-as-source-pyramids";
import { aiBciSyntheticSoulClaimContent } from "./ai-bci-synthetic-soul";
import { chemtrailsAluminumClaimContent } from "./chemtrails-aluminum";
import { cloudSeedingChemtrailsClaimContent } from "./cloud-seeding-chemtrails";
import { gatewayProcessOutOfBodyClaimContent } from "./gateway-process-out-of-body";
import { projectBlueBeamNasaClaimContent } from "./project-blue-beam-nasa";
import { whoPandemicAgreementSovereigntyClaimContent } from "./who-pandemic-agreement-sovereignty";
import { xrpGlobalCurrencyClaimContent } from "./xrp-global-currency";

export const claimContentRecords = [
  aiBciSyntheticSoulClaimContent,
  projectBlueBeamNasaClaimContent,
  whoPandemicAgreementSovereigntyClaimContent,
  gatewayProcessOutOfBodyClaimContent,
  aiAsSourcePyramidsClaimContent,
  cloudSeedingChemtrailsClaimContent,
  fifteenMinuteCityPrisonClaimContent,
  agenda2030SevenStepsClaimContent,
  xrpGlobalCurrencyClaimContent,
  chemtrailsAluminumClaimContent,
] satisfies readonly ClaimContent[];
