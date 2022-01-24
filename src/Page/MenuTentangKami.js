import {useState} from 'react';

export default function MenuTentangKami() {
    
    useState = {
        tentang : "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"
    }

    return (
        <div>
            <center>
                <p>Tentang Kami </p> {useState.tentang}
            </center>
        </div>
    )
}