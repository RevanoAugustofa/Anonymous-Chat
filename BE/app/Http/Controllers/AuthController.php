<?php

// namespace App\Http\Controllers;

// use App\Models\User;
// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Auth;
// use App\Helpers\NamaGenerator;
// use Illuminate\Support\Facades\Log;

// class AuthController extends Controller
// {
//     public function register(Request $request)
//     {
//         $request->validate([
//             'email' => 'required|email|unique:users,email',
//             'password' => 'required|min:6',
//         ]);

//         $user = User::create([
//             'kode_unik' => uniqid(),
//             'nama' => NamaGenerator::generate(),
//             'email' => $request->email,
//             'password' => Hash::make($request->password),
//         ]);

//         return response()->json([
//             'message' => 'Registrasi berhasil',
//             'user' => $user
//         ], 201);
//     }

//     public function login(Request $request)
//     {
//         Log::info('LOGIN ROUTE HIT');
//         Log::info('XSRF TOKEN: ' . $request->header('X-XSRF-TOKEN'));
//         Log::info('SESSION COOKIE: ' . $request->cookie(config('session.cookie')));

//         $request->session()->put('init', true); // Optional: kalau mau debug session awal

//         $credentials = $request->validate([
//             'email' => 'required|email',
//             'password' => 'required',
//         ]);

//         if (!Auth::attempt($credentials)) {
//             return response()->json([
//                 'message' => 'Email atau password salah'
//             ], 401);
//         }

//         $request->session()->regenerate();

//         $user = Auth::user();

//         return response()->json([
//             'message' => 'Login berhasil',
//             'user' => [
//                 'id' => $user->id,
//                 'nama' => $user->nama,
//                 'email' => $user->email,
//                 'kode_unik' => $user->kode_unik
//             ]
//         ]);
//     }
// }


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Helpers\NamaGenerator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::create([
           'kode_unik' => uniqid(),
            'nama' => NamaGenerator::generate(),
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return response()->json([
            'message' => 'Registrasi berhasil',
            'user' => $user,
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Email atau password salah'], 401);
        }

        $request->session()->regenerate();

        return response()->json([
            'message' => 'Login berhasil',
            'user' => Auth::user(),
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logout berhasil']);
    }
}
