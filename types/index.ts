import {MouseEventHandler} from "react"

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button" | "submit"
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;

}

export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
}


export interface carCardProps{
    city_mpg?: number|""|undefined,
    class?:string,
    combination_mpg?: number,
    cylinders?: number,
    displacement?: number,
    drive?: string,
    fuel_type?: string,
    highway_mpg?: number,
    make?: string | undefined,
    model?: string,
    transmission?: string,
    year?: number
}

export interface FilterProps{
    manufacturer:string,
    year: number,
    fuel: string,
    model: number,
    limit: string,
}


export interface OptionProps{
    title:string;
    value:string;
}
export interface CustomFilterProps{
    title:string,
    options:OptionProps[]
}

export interface showMoreProps{
    isNext:boolean;
    pageNumber:number;
}

export interface HomeProps {
    searchParams: FilterProps;
  }