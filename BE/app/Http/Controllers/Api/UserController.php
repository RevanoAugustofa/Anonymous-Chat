<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;

class UserController extends Controller {
    public function store(Request $request) {
        $user = User::create([
            'kode_unik' => Str::random(10),
            'nama' => $request->nama
        ]);
        return response()->json($user);
    }

    // Ambil semua prompt dari user berdasarkan kode_unik
    public function getPrompts($kode_unik) {
        $user = User::where('kode_unik', $kode_unik)->firstOrFail();
        $prompts = $user->prompts()->get();
        return response()->json($prompts);
    }

    public function index()
        {
            $users = User::paginate(20);
            return response()->json($users);
        }


}
