

const Profile = () => {
  return (
    <div className='font-Inter'>
            <div>
                <h2 className='font-Gilda tracking-wider text-2xl'>My Profile</h2>
            </div>

            <div className='space-y-8 mt-4'>
                {/* Photo Section */}
                <div className='bg-base-100 py-8 px-10 rounded-xl flex items-center gap-x-6'>
                    {/* Avatar Section */}
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>

                    {/* Name and Other Text */}
                    <div className='space-y-1'>
                        <h2 className='font-semibold font-Gilda'>Audrey J. Shaw</h2>
                        <h5 className='font-Inter text-sm'>Basic User</h5>
                        <h6 className='font-Inter text-sm'>New York, United States</h6>
                    </div>
                </div>


                <div className='bg-base-100 py-8 px-10 rounded-xl'>
                    <div className='border-b-2 border-base-300'>
                        <h2 className='pb-2 font-Gilda text-lg'>Personal Information</h2>
                    </div>
                    {/* Personal Information Details */}
                    <div className='grid grid-cols-3'>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>First Name</h5>
                            <h5 className=''>Audrey</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Last Name</h5>
                            <h5 className=''>J. Shaw</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Date of Birth</h5>
                            <h5 className=''>J. Shaw</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Phone Number</h5>
                            <h5 className=''>+1 511 468 4684</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Email</h5>
                            <h5 className=''>contact@aundry.com</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Role</h5>
                            <h5 className=''>User</h5>
                        </div>
                    </div>
                </div>


                <div className='bg-base-100 py-8 px-10 rounded-xl'>
                    <div className='border-b-2 border-base-300'>
                        <h2 className='pb-2 font-Gilda text-lg'>Address</h2>
                    </div>
                    {/* Address Information */}
                    <div className='grid grid-cols-3'>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Country</h5>
                            <h5 className=''>United State</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>City</h5>
                            <h5 className=''>New York</h5>
                        </div>
                        <div className='mt-4'>
                            <h5 className='text-gray-500'>Postal Code</h5>
                            <h5 className=''>15005</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Profile