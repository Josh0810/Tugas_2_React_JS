import { useState } from 'react'

export default function ListMakanan(props) {
    useState = {
        datalist: props.imeg
    }

    return (
        <div>
            <img src={useState.datalist} alt="Product Makanan" width="150"/>
        </div>
    )
}