import Image from "next/image"

import logo from '../../assets/logo.svg'
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { Copy, Link } from "lucide-react"
import { IconButton } from "@/components/icon-button"

export default function Invites() {
    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 md:flex-row">

            {/* DIV aligned to left */}
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt='DevStage Logo' width={108.5} height={30} />
                
                {/* Subiscrition */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
                        Subscription Confimed! 🎉
                    </h1>
                    <p className="text-gray-300">
                        To get access to this event, please open e-mail sent.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                            Invite and warn
                        </h2>
                        <p className="text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo magnam nobis, commodi, id possimus ipsum nihil fugit iusto aliquid omnis repudiandae, tempore deleniti ab illum modi esse a quia reiciendis!
                        </p>
                    </div>
                        
                    <InputRoot>
                        <InputIcon>
                            <Link className="size-5" />
                        </InputIcon>

                        <InputField 
                            readOnly 
                            defaultValue="http://localhost:3000/invites/...." 
                        />
                        
                        {/* 16:24 */}
                        <IconButton className="-mr-2">
                            <Copy className="size-5" />
                        </IconButton>
                    </InputRoot>
                </div>


            </div>

            {/* DIV aligned to right */}
            <div>div2</div>
        </div>
    )
}