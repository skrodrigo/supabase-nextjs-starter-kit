'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">

        <Card className='border-none'>
          <CardContent className="pt-6 text-center ">
            <motion.h1 
              className="text-6xl font-extrabold mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              404
            </motion.h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Oops! Página não encontrada!</h2>
            <p className="text-muted-foreground mb-6">Possivelmente, essa página não existe ou foi removida.</p>


            <div className="flex justify-center space-x-4">
              <Button variant="outline" onClick={() => window.history.back()} className="flex items-center">
                <ArrowLeft className="mr-2" size={18} />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
   
    </div>
  )
}
