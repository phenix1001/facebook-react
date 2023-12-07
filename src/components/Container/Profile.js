import './Profile.css'
import images from '../../components/Container/Images'
import SepLine from '../../components/SepLine/SepLine'

function Profile(){

    return(
        <div className='profile-section'>
            <div className='nav-1'>
                <button>Asta愛. <img src={images.down}></img></button>
                <button className='edit-btn'>
                    <img src={images.profileedit}></img>
                </button>
            </div>

            <div className='cover-pic' style={{backgroundImage:`url(${images.megumi2})`}}>
                <div className='profile-pic'>
                    <img id='profile-picture' src={images.megumi1}></img>
                </div>
            </div>

            <div className='user-info-1'>
                <h4 className='username'>Asta愛.</h4>
                <p className='bio'>
                    the most cringe-worthy account on the internet.
                </p>
                <div className='story-edit-more'>
                    <button><img src={images.add}></img>Add to story</button>
                    <button><img src={images.edit}></img>Edit profile</button>
                    <button><img src={images.more}></img></button>
                </div>
            </div>

            <SepLine />

            <div className='navbar-2'>
                <button className='active-btn'>Posts</button>
                <button>Reels</button>
            </div>

            <div className='details-section'>
                <h1>Details</h1>
                <div className='details'>
                    <p><img src={images.followers}></img> Followed by 241 people</p>
                    <p><img src={images.instagram}></img> <a href='https://www.instagram.com/ossama.btb'>ossama.btb</a></p>
                    <p><img src={images.twitter}></img> <a href=''>A'z O'ssama</a></p>
                    <p><img src={images.more}></img> See your About info</p>
                </div>
            </div>
        </div>
    )
}

export default Profile