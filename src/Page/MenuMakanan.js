import ListMakanan from "../ListData/ListMakanan";

export default function MenuMakanan() {
    return (
        <div>
            <h3>Daftar Makanan Yang Kami Sediakan : </h3>
            <td>
                <ListMakanan imeg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
            </td>
            <td>
                <ListMakanan imeg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
            </td>
            <td>
                <ListMakanan imeg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
            </td>
            <td>
                <ListMakanan imeg="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
            </td>
            <td>
                <ListMakanan imeg="https://pbs.twimg.com/media/DuDlLzAVYAER0Qb.jpg" />
            </td>
        </div>
    )
}