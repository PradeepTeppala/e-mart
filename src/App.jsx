import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./stores/pages/LandingPage";
import MobilePage from "./stores/pages/MobilePage";
import ComputerPage from "./stores/pages/ComputerPage";
import WatchesPage from "./stores/pages/WatchesPage";
import AcPage from "./stores/pages/AcPage";
import MenFashionPage from "./stores/pages/MenFashionPage";
import WomenFashionPage from "./stores/pages/WomenFashionPage";
import BooksPage from "./stores/pages/BooksPage";
import TvPage from "./stores/pages/TvPage";
import FurniturePage from "./stores/pages/FurniturePage";
import KitchenPage from "./stores/pages/KitchenPage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import FridgePage from "./stores/pages/FridgePage";

import MobileSingle from "./singles/MobileSingle";
import ComputerSingle from "./singles/ComputerSingle";
import WatcheSingle from "./singles/WatcheSingle";
import ManSingle from "./singles/ManSingle";
import WomanSingle from "./singles/WomanSingle";
import KitchenSingle from "./singles/KitchenSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import AcSingle from "./singles/AcSingle";
import FrigeSingle from "./singles/FridgeSingle";
import SpeakerSingle from "./singles/SpeakerSingle";
import TvSingle from "./singles/TvSingle";
import BookSingle from "./singles/BookSingle";
import UserCart from "./stores/UserCart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Mobile" element={<MobilePage />} />
        <Route path="/Computer" element={<ComputerPage />} />
        <Route path="/Watch" element={<WatchesPage />} />
        <Route path="/MenFashion" element={<MenFashionPage />} />
        <Route path="/WomenFashion" element={<WomenFashionPage />} />
        <Route path="/Ac" element={<AcPage />} />
        <Route path="/Book" element={<BooksPage />} />
        <Route path="/Tv" element={<TvPage />} />
        <Route path="/Furniture" element={<FurniturePage />} />
        <Route path="/Kitchen" element={<KitchenPage />} />
        <Route path="/Speaker" element={<SpeakerPage />} />
        <Route path="/Fridge" element={<FridgePage />} />

        <Route path="/Mobile/:id" element={<MobileSingle />} />
        <Route path="/Computer/:id" element={<ComputerSingle />} />
        <Route path="/Watch/:id" element={<WatcheSingle />} />
        <Route path="/MenFashion/:id" element={<ManSingle />} />
        <Route path="/WomenFashion/:id" element={<WomanSingle />} />
        <Route path="/Kitchen/:id" element={<KitchenSingle />} />
        <Route path="/Furniture/:id" element={<FurnitureSingle />} />
        <Route path="/Ac/:id" element={<AcSingle />} />
        <Route path="/Fridge/:id" element={<FrigeSingle />} />
        <Route path="/Speaker/:id" element={<SpeakerSingle />} />
        <Route path="/Tv/:id" element={<TvSingle />} />
        <Route path="/Book/:id" element={<BookSingle />} />

        <Route path="/Cart" element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
