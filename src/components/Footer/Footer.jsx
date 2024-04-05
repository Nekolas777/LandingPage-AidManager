import Logo from '../../assets/Logo-AidManager-White.svg';
import { Button } from '../Button/Button';

export const Footer = () => {
    return (
        <section className="bg-footer py-20">
            <div className="container-footer">
                <div className='flex flex-row items-stretch h-full justify-between w-full'>
                    <img className='w-80' src={ Logo } />
                    <div className='flex flex-row gap-5'>
                        <input className='h-full indent-5 w-72 rounded-full' type='email' placeholder='neko@gmail.com'></input>
                        <Button name="Suscribe" />
                    </div>
                </div>
            </div>
        </section>
    )
}
