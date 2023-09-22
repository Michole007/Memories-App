import backImage from '../assets/image.jpg';
import { AiFillLike} from "react-icons/ai";
import { MdDelete} from "react-icons/md";


const Loop_arr = [1, 2, 3, 4];

const Posts = () => {
    return (
        <div className="posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
        }}>
            {Loop_arr.map(function (value) {
               return  <div key={value} className="post" style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.4)',
                borderRadius: '15px'
            }}>
                <div className="post_image"
                    style={{
                        backgroundImage: `url(${backImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '200px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px'
                    }}
                >
                    <div className="creator">
                        <h4 style={{ marginBottom: '10px', color:"white"}}>Mark</h4>
                        <p style={{color:'white'}}>2 months ago</p>
                    </div>
                    <div className="edit">
                        <p style={{color:'white'}}>...</p>
                    </div>
                </div>
                <div className='desc' style={{ padding: '20px' }}>
                    <p>#Belgium #Brussel</p>
                    <h3 style={{ marginTop: '15px' }}>Visited Bruges</h3>
                    <p style={{ margin: '15px 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio repellat quia eveniet similique molestias obcaecati assumenda, architecto quasi commodi soluta.</p>
                    <div className='action' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button> <AiFillLike color='blue' /> like</button>
                        <button>< MdDelete color='blue' />delete</button>
                    </div>
                </div>
            </div>
            })}
        </div>
    )
}

export default Posts;