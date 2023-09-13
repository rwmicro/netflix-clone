import placeholder from 'public/assets/img/tools/placeholder.png'
import Image from 'next/image'

export default function Interests({genres}){
    return(<>
    <div className='text-white'>
        <h1 className='text-3xl font-bold mt-10 mb-5 '>More like this :</h1>

        <div className='mb-5 ml-10'>
            <Image src={placeholder} width={250} alt='placeholder' className='rounded-2xl' />
            <div className='ml-2'>
            <h1 className='font-bold text-xl'>Placeholder</h1>
            <div className='flex gap-2 text-sm font-semibold text-neutral-400 '>
                <span>Realesed on </span>
                <span> </span>
            </div>
            </div>
        </div>
          
        <div className='mb-5 ml-10'>
            <Image src={placeholder} width={250} alt='placeholder' className='rounded-2xl' />
            <div className='ml-2'>
            <h1 className='font-bold text-xl'>Placeholder</h1>
            <div className='flex gap-2 text-sm font-semibold text-neutral-400 '>
                <span>Realesed on </span>
                <span> </span>
            </div>
            </div>
        </div>
        <div className='mb-5 ml-10'>
            <Image src={placeholder} width={250} alt='placeholder' className='rounded-2xl' />
            <div className='ml-2'>
            <h1 className='font-bold text-xl'>Placeholder</h1>
            <div className='flex gap-2 text-sm font-semibold text-neutral-400 '>
                <span>Realesed on </span>
                <span> </span>
            </div>
            </div>
        </div>
        
    </div>
    </>)
}