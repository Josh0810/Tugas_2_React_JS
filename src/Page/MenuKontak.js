import {useState} from 'react';

export default function MenuKontak() {
    
    useState = {
        alamat: "JL. Swadaya IV, Pd. Ranggon, Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
        kontak: "081312345678"
    }
    return (
        <div>
            <center>
                <h3>{useState.alamat}</h3>
                <h4>Kontak Kami : {useState.kontak}</h4>
            </center>
        </div>
    )
}