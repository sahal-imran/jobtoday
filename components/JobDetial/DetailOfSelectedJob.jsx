import React,{ useEffect } from 'react';
import { useRouter } from 'next/router';

function DetailOfSelectedJob() {

    const router = useRouter();
    const JobTitle = router.query.jobTitle;

    
    useEffect(() => {
    
      return () => {
        
      }
    }, [])
    

  return (
    <>
    {JobTitle}
    </>
  )
}

export default DetailOfSelectedJob