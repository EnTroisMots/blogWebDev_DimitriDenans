import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simuler l'état de connexion

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Logique de déconnexion (par exemple, effacer les cookies, JWT, etc.)
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        // Logique de connexion (par exemple, authentification, etc.)
    };

    return (
        <nav className="p-4 bg-gray-100 flex justify-between items-center">
            {/* À gauche : Nom du site */}
            <div className="text-xl font-semibold">
                <Link href="/">Mon Site</Link>
            </div>

            {/* À droite : Boutons de connexion / déconnexion et publication */}
            <div className="flex items-center gap-4">
                {/* Bouton Poster visible seulement si connecté */}
                {isLoggedIn && (
                    <Link href="/post">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Poster
                        </button>
                    </Link>
                )}

                {/* Boutons Connexion / Déconnexion */}
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Déconnexion
                    </button>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="bg-green-500 text-white px-4 py-2 rounded"
                    >
                        Connexion
                    </button>
                )}
            </div>
        </nav>
    );
}
