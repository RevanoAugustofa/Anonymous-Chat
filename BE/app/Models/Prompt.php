<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prompt extends Model
{
    public $timestamps = true;

    protected $fillable = ['user_id', 'isi_pesan'];

    public function user() {
    return $this->belongsTo(User::class);
    }

    public function responses() {
        return $this->hasMany(Response::class);
    }
}
