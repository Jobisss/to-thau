import { useRef } from "react"
import { motion } from "motion/react"

export function Timeline() { 

    const scrollRef = useRef(null) 

    return (
        <div ref={scrollRef} style={{ overflow : "scroll" }}>
            <motion.div
                initial={{ opacity : 0 }}
                whileInView={{ opacity : 0 }}
                viewport={{ root : scrollRef }}
            />
        </div>
    )
}