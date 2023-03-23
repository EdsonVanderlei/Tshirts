import React from 'react'
import { MdOutlinePlayCircleOutline } from 'react-icons/md'
import css from '../App.module.css'
import { BiShoppingBag } from 'react-icons/bi'
import confete from '../Assets/confete.gif'
import { Team} from '../Types/Types'


const Tshirt = ({ Time } : { Time : Team}) => {

    const confet = React.useRef<HTMLImageElement | null>(null);
    function handleEnter() {
        if (confet.current) {
            confet.current.classList.add('active')
            setTimeout(() => {
                confet.current && confet.current.classList.remove('active')

            }, 3000);
        }
    }

    return (
        <div style={{ backgroundImage: `url(${Time.background})` }} className={css.Wrapper}>
            <img className={css.tShirt} src={Time.camiseta} alt="" />
            <img ref={confet} className={css.confete} src={confete} alt="" />
            <div className={css.Logo}>
                <img src={Time.logo} alt="" />
            </div>
            <p className={css.kit}>{Time.kit}</p>
            <p className={css.title}>{Time.nome}</p>
            <div className={css.Informations}>
                <div className={css.Video}>
                    <div className={css.VideoWrapper}>
                        <MdOutlinePlayCircleOutline className={css.playButton} />
                        <img src={Time.video} alt="" />
                    </div>
                    <div className={css.Describe}>
                        <h3>How Was Made? </h3>
                        <p>
                            {Time.made}
                        </p>
                    </div>
                </div>
                <div className={css.About}>
                    <p>{Time.about}</p>
                    <button onMouseEnter={handleEnter} >SHOP NOW  <BiShoppingBag /></button>

                </div>
            </div>
            <div className={css.preview}>
                <div className={css.previewDescribe}>
                    <p className={css.previewKit}>
                        {Time.preview.kit}
                    </p>
                    <p className={css.previewName}>
                        {Time.preview.nome}
                    </p>
                </div>
                <div style={{ backgroundColor: Time.preview.color }} className={css.previewBox}>

                </div>
                <img src={Time.preview.camiseta} alt="" />
            </div>

        </div>
    )
}

export default Tshirt