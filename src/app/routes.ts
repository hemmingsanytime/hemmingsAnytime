import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { ClearancePage } from "./pages/ClearancePage";
import { RemovalPage } from "./pages/RemovalPage";
import { StoragePage } from "./pages/StoragePage";
import { CleaningPage } from "./pages/CleaningPage";
import { PaintingPage } from "./pages/PaintingPage";
import { MarineDetailingPage } from "./pages/MarineDetailingPage";
import { AviationDetailingPage } from "./pages/AviationDetailingPage";
import { WasteRemovalPage } from "./pages/WasteRemovalPage";
import { ContactPage } from "./pages/ContactPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { BrightonPage } from "./pages/BrightonPage";
import { HouseClearanceEastSussexPage } from "./pages/HouseClearanceEastSussexPage";
import { ProbateClearanceEastSussexPage } from "./pages/ProbateClearanceEastSussexPage";
import { OfficeClearanceEastSussexPage } from "./pages/OfficeClearanceEastSussexPage";
import { RubbishClearanceEastSussexPage } from "./pages/RubbishClearanceEastSussexPage";
import { HouseRemovalsEastSussexPage } from "./pages/HouseRemovalsEastSussexPage";
import { OfficeRemovalsEastSussexPage } from "./pages/OfficeRemovalsEastSussexPage";
import { RemovalAndStorageEastSussexPage } from "./pages/RemovalAndStorageEastSussexPage";
import { ServicesPage } from "./pages/ServicesPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: ServicesPage,
      },
      {
        path: "services/clearance",
        Component: ClearancePage,
      },
      {
        path: "services/removal",
        Component: RemovalPage,
      },
      {
        path: "services/storage",
        Component: StoragePage,
      },
      {
        path: "services/cleaning",
        Component: CleaningPage,
      },
      {
        path: "services/painting-decor",
        Component: PaintingPage,
      },
      {
        path: "services/marine-detailing",
        Component: MarineDetailingPage,
      },
      {
        path: "services/aviation-detailing",
        Component: AviationDetailingPage,
      },
      {
        path: "services/waste-removal",
        Component: WasteRemovalPage,
      },
      {
        path: "services/clearance/house-clearance-east-sussex",
        Component: HouseClearanceEastSussexPage,
      },
      {
        path: "services/clearance/probate-clearance-east-sussex",
        Component: ProbateClearanceEastSussexPage,
      },
      {
        path: "services/clearance/office-clearance-east-sussex",
        Component: OfficeClearanceEastSussexPage,
      },
      {
        path: "services/clearance/rubbish-clearance-east-sussex",
        Component: RubbishClearanceEastSussexPage,
      },
      {
        path: "services/removal/house-removals-east-sussex",
        Component: HouseRemovalsEastSussexPage,
      },
      {
        path: "services/removal/office-removals-east-sussex",
        Component: OfficeRemovalsEastSussexPage,
      },
      {
        path: "services/storage/removal-and-storage-east-sussex",
        Component: RemovalAndStorageEastSussexPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "reviews",
        Component: ReviewsPage,
      },
      {
        path: "gallery",
        Component: GalleryPage,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicyPage,
      },
      {
        path: "terms-of-service",
        Component: TermsOfServicePage,
      },
      {
        path: "areas/brighton",
        Component: BrightonPage,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);