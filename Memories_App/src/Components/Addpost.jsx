import { useState } from "react";

const Addpost = () => {
    const [creator, setCreator] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [tag, setTag] = useState('');
  return (
    <div className="add_post" style={{ 
                boxShadow: '1px 1px 1px 1px rgba(0.4 0.4 0.4 0.4)', 
                backgroundColor: 'white', 
                padding: '30px',
                height: '450px'
             }}>
                
              
            <form>

            <h3>Creating a Memory</h3>
            
                <div className="creator">
                    <input type="text" placeholder="Creator" 
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)} 
                    />
                    
                </div>
                <div className="title">
                    <input type="text" placeholder="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                    />
                </div>

                <div className="message">
                    <textarea value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message" 
                    cols="30" 
                    rows="10">
                    </textarea>

                </div>
                <div className="tag">
                    <input type="text" placeholder="Tag" 
                    value={tag}
                    onChange={(e)=> setTag(e.target.value)}
                    />
                </div>
                <div className="file">
                    <input type="file" />
                </div>
                <div className="buttons">
                    <button type="submit" className="submit" style={{ 
                    display:"block", 
                    backgroundColor:'blue', 
                    width:'100%',
                    color:'white'}}>submit</button>

                    <button type="button" className="clear"style={{
                    display:"block",
                    backgroundColor:"red",
                    color:'white',
                    width:'100%',
                    }}>clear</button>
                    <p>{creator}</p>
                </div>
            </form>       
        </div>
  )
}

export default Addpost