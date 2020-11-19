import './ContendersCircles.css'

const ContendersCircles = () => {
    const [data, setData] = useState([])

    useEffect(()=> {

        const fetchDataDetails = async () => {
          const request = await axios.get(`http://9e420d11d0ce.ngrok.io/painting/all`)
          console.log('FETCH', request.data)
          setData(request.data)
        }
        fetchDataDetails()
      }, [])


        return (
                <div className='contenders__wrapper'>
                    <div className='contenders__circle'>yoyoyoyoyoyoy</div>

                </div>
        )
}    

export default ContendersCircles