import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseIcon from '../assets/CloseIcon'
interface Props{
  children:ReactNode,
  modal:boolean,
  setModal:(v:boolean) => void,
  type?: 'xl'
}

export default function ExpenseModal({children, modal, setModal, type}:Props) {

  const maxWidth = type === 'xl' ? 'max-w-xl w-[90%]' : 'w-full'

  return (
    <>
  
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setModal(false)
        }>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`${maxWidth} transform overflow-hidden shadow-xl transition-all`}>
                   <div className='relative'>
                        {/* <button className='absolute top-0 right-2' onClick={() => setModal(false)}> <CloseIcon width={22}/> </button> */}
                        {children}
                   </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}