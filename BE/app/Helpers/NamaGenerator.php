<?php

namespace App\Helpers;

class NamaGenerator
{
    public static function generate()
    {
        $sifat = [
            'Ceria', 'Galak', 'Tenang', 'Pemalu', 'Cerdas',
            'Marah', 'Berani', 'Lucu', 'Lincah', 'Ngantuk', 'Tengkurep',
            'Mancing','Terbang'
        ];

        $hewan = [
            'Kucing', 'Gajah', 'Tikus', 'Singa', 'Kuda',
            'Burung', 'Ular', 'Kelinci', 'Harimau', 'Kambing'
        ];

        $randomSifat = $sifat[array_rand($sifat)];
        $randomHewan = $hewan[array_rand($hewan)];

        return $randomHewan . $randomSifat ;
    }
}
