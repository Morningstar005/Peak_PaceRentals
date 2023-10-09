"use client"
import { showMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButton } from "."
import { updateSearchParams } from "@/utils"
const ShowMore = ({pageNumber,isNext}:showMoreProps) => {
    const router = useRouter()

    const handleNavigation =()=>{
        const newLimit = ( pageNumber+1)*10;
        const newPathName = updateSearchParams("limit",`${newLimit}`)
        router.push(newPathName)
    }
    return (
        <div className="flex-center w-full gap-5 mt-10">
            {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
        </div>
    )
}

export default ShowMore