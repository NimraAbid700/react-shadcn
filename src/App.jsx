import { useState } from "react";
import { Star } from "lucide-react";
import "./App.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function StarRating({ max = 5 }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex space-x-1 mt-2 mb-2">
      {Array.from({ length: max }, (_, i) => (
        <button
          key={i}
          onClick={() => setRating(i + 1)}
          className="hover:scale-110 transition-transform"
        >
          <Star
            className={`w-6 h-6 ${
              i < rating
                ? "fill-yellow-400 stroke-yellow-400"
                : "stroke-gray-400"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function App() {
  return (
    <Card
      className="grid place-items-center p-4 rounded-xl max-w-md mx-auto 
  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"
      style={{
        boxShadow:
          "8px 8px 20px rgba(0,0,0,0.3), -8px -8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <CardHeader className="flex flex-col items-center text-center">
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nisi
        similique recusandae sequi dolor, reprehenderit amet magnam modi
        expedita,adipisci veritatis voluptate minus velit minima dolorem
        delectus officia deserunt. Repellendus?{" "}
        <Badge variant="outline">Badge</Badge>
      </p>
      <StarRating />
      <Button variant="secondary" className="h-[48px] w-[100px]">
        Secondary
      </Button>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default App;
