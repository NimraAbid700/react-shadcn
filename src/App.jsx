import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <Card className="h-screen grid place-items-center">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 outline outline-1 outline-blue-500 p-4 rounded-lg bg-lime-400">
              <h1>Welcome to Shadcn Card Component</h1>
            </div>       
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default App;
