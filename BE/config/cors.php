<?php

return [

    // Rute mana aja yang CORS-nya diaktifkan
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'logout', '/user'],

    // Metode HTTP yang diizinkan
    'allowed_methods' => ['*'],

    // Domain asal yang diizinkan akses (bisa localhost atau domain production)
    'allowed_origins' => ['http://localhost:5173'],

    // Pola origin (bisa kosong kalau nggak pakai wildcard)
    'allowed_origins_patterns' => [],

    // Header HTTP yang boleh dipakai client
    'allowed_headers' => ['*'],

    // Header yang boleh diekspos ke client (biasanya kosong)
    'exposed_headers' => [],

    // Waktu cache preflight request, 0 artinya nggak di-cache
    'max_age' => 0,

    // Apakah credentials (cookie, auth headers) diizinkan
    'supports_credentials' => true,

];
