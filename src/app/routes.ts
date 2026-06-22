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
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);