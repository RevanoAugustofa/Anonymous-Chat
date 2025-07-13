<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Prompt;

class PromptController extends Controller
{
    // Menyimpan prompt baru
    public function store(Request $request, $kode_unik)
    {
        $request->validate([
            'isi_pesan' => 'required|string|max:1000',
        ]);

        $user = User::where('kode_unik', $kode_unik)->firstOrFail();

        $prompt = Prompt::create([
            'user_id' => $user->id,
            'isi_pesan' => $request->isi_pesan,
        ]);

        return response()->json([
            'message' => 'Prompt berhasil dibuat.',
            'data' => $prompt
        ], 201);
    }

    // Menampilkan semua prompt milik user berdasarkan kode unik
    public function index($kode_unik)
    {
        $user = User::where('kode_unik', $kode_unik)->firstOrFail();

        $prompts = $user->prompts()->with('responses')->get();

        return response()->json($prompts);
    }

    // Menghapus prompt berdasarkan ID dan kode_unik
    public function destroy($kode_unik, $prompt_id)
    {
        $user = User::where('kode_unik', $kode_unik)->firstOrFail();
        $prompt = Prompt::where('id', $prompt_id)->where('user_id', $user->id)->firstOrFail();

        $prompt->delete();

        return response()->json([
            'message' => 'Prompt berhasil dihapus.'
        ]);
    }

    // (Opsional) Untuk menampilkan form create di web (tidak umum di API)
    public function create()
    {
        return response()->json([
            'message' => 'Gunakan endpoint POST /prompts/{kode_unik} untuk membuat prompt.'
        ]);
    }
}
