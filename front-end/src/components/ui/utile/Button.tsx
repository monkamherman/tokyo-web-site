import { Button } from "@/components/ui/button"

interface type {
    label: string
}

function Bouton({label}:type): JSX.Element {
    return (
        <div>
            <Button  className="bg-primary_color text-white py-6 px-8 rounded-[1rem] " >{label}</Button>
            
        </div>
    )
}

export default Bouton
