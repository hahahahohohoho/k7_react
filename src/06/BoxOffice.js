import box from './BoxOffice.json';

export default function () {
    const dailyList = box.boxOfficeResult.dailyBoxOfficeList;
    const movieNm = dailyList.map((item) => <li key={item.movieCd}>
                                                {item.rank} : {item.movieNm}
                                            </li>)
  return (
    <div>
        <ul>
            {movieNm}
        </ul>
    </div>
  )
}
