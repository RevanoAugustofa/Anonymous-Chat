<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Prompt;

class PromptController extends Controller {
    public function store(Request $request, $kode_unik) {
        $user = User::where('kode_unik', $kode_unik)->firstOrFail();

        $prompt = Prompt::create([
            'user_id' => $user->id,
            'isi_pesan' => $request->isi_pesan
        ]);

        return response()->json($prompt);
    }

    public function index($kode_unik) {
        $user = User::where('kode_unik', $kode_unik)->firstOrFail();
        $prompts = $user->prompts()->with('responses')->get();
        return response()->json($prompts);
    }
}
