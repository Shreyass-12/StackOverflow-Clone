import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'

const UserProfile = () => {
    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className='home-container-2'>
                <section>
                    <div className="user-details-container">
                      <div className='user-details'>
                        <Avatar >

                        </Avatar>
                      </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default UserProfile
