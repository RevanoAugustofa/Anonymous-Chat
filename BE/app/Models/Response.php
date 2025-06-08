<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    public $timestamps = true;

    protected $fillable = ['prompt_id', 'isi_balasan', 'ip_address'];

    public function prompt() {
    return $this->belongsTo(Prompt::class);
    }
}
