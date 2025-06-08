<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Response;
use App\Models\Prompt;

class ResponseController extends Controller {
    public function store(Request $request, $prompt_id) {
        $prompt = Prompt::findOrFail($prompt_id);

        $response = Response::create([
            'prompt_id' => $prompt->id,
            'isi_balasan' => $request->isi_balasan,
            'ip_address' => $request->ip() // atau $request->ip_address kalau manual
        ]);

        return response()->json($response);
    }

    public function index($prompt_id) {
        $responses = Response::where('prompt_id', $prompt_id)->get();
        return response()->json($responses);
    }
}
