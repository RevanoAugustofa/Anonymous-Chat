<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\PromptController;
use App\Http\Controllers\Api\ResponseController;

Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);               // GET /api/users
    Route::post('/', [UserController::class, 'store']);              // POST /api/users
    Route::get('{kode_unik}', [UserController::class, 'show']);      // GET /api/users/{kode_unik}
    Route::get('{kode_unik}/prompts', [UserController::class, 'getPrompts']);
    Route::post('{kode_unik}/prompts', [PromptController::class, 'store']);
});


Route::prefix('prompts')->group(function () {
    Route::post('{prompt_id}/responses', [ResponseController::class, 'store']);
    Route::get('{prompt_id}/responses', [ResponseController::class, 'index']);
});

Route::get('/ping', function () {
    return response()->json(['message' => 'pong']);
});
