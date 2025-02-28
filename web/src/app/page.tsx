import Image from 'next/image';

import logo from '../assets/logo.svg';
import { ArrowRight, Mail, Radio, User } from 'lucide-react';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import { Button } from '@/components/button';

export default function Home() {
  return (
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        
        {/* DIV dev stage and CodeCraft Summit 2025 */}
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image src={logo} alt='DevStage Logo' width={108.5} height={30} />

          <h1 className='text-6xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left'>
            <span className='text-blue'>CodeCraft</span>
            Summit 2025
          </h1>
        </div>

        {/* DIV About the event and Register */}
        <div className='flex gap-5 items-stretch flex-col md:flex-row'>
          <div className='flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6'>
            <div className='flex items-center justify-between'>
              <h2 className='font-heading font-bold text-gray-100 text-xl'>About this Event</h2>
              <span className='text-danger font-semibold text-xs flex gap-2 items-center'>
                <Radio className='size-5' />
                LIVE
              </span>
            </div>
            
            <p className='text-gray-300 leading-relaxed text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ad quam minima voluptate voluptatum sit sapiente officiis libero recusandae asperiores est ab similique doloribus deleniti perferendis quasi voluptas? Alias, qui.
              <br /><br />
              On 15th, 16th and 17th of October from 18h to 21h | <span className='font-bold text-gray-200'>Online</span> and <span className='font-bold text-gray-200'>Free</span>.
            </p>
          </div>

          <form className='bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[441px]'>
            <h2 className='font-heading font-bold text-gray-100 text-xl'>Register</h2>

            <div className='space-y-3'>
              <InputRoot>
                <InputIcon>
                  <User className='size-5' />
                </InputIcon>
                <InputField type='text' placeholder='Full Name' />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail className='size-5' />
                </InputIcon>
                <InputField type='text' placeholder='john@example.com' />
              </InputRoot>
            </div>

            <Button type='submit'>
              Register
              <ArrowRight className='size-5' />
            </Button>
          </form>
        </div>
      </div>
  );
}
