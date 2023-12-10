import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TimelineEvent() {
  return (
    <div className="overflow-auto h-full w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col space-y-6 py-6">
        {/* 1 */}
        <div className="flex items-start space-x-3 text-sm">
          <div className="relative">
            <div className="absolute -left-1.5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
            <Avatar className="relative z-10 w-8 h-8">
              <AvatarImage
                alt="@johndoe"
                src="https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <Card className="rounded-lg shadow-lg">
              <CardHeader className="p-4">
                <h4 className="font-medium">Born</h4>
                {/* <Badge className="mt-2">Important</Badge> */}
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  I was born on the 1st October 1999 in Derby, England
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-start space-x-3 text-sm">
          <div className="min-w-0 flex-1">
            <Card className="rounded-lg shadow-lg">
              <CardHeader className="p-4">
                <h4 className="font-medium">Event 2</h4>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  This is another description of the event.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <Avatar className="relative z-10 w-8 h-8">
              <AvatarImage
                alt="@janedoe"
                src="https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {/* 1 */}
        <div className="flex items-start space-x-3 text-sm">
          <div className="relative">
            <div className="absolute -left-1.5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
            <Avatar className="relative z-10 w-8 h-8">
              <AvatarImage
                alt="@johndoe"
                src="https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <Card className="rounded-lg shadow-lg">
              <CardHeader className="p-4">
                <h4 className="font-medium">Born</h4>
                {/* <Badge className="mt-2">Important</Badge> */}
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  I was born on the 1st October 1999 in Derby, England
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-start space-x-3 text-sm">
          <div className="min-w-0 flex-1">
            <Card className="rounded-lg shadow-lg">
              <CardHeader className="p-4">
                <h4 className="font-medium">Event 2</h4>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  This is another description of the event.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <Avatar className="relative z-10 w-8 h-8">
              <AvatarImage
                alt="@janedoe"
                src="https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        {/* 1 */}
        <div className="flex items-start space-x-3 text-sm">
          <div className="relative">
            <div className="absolute -left-1.5 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
            <Avatar className="relative z-10 w-8 h-8">
              <AvatarImage
                alt="@johndoe"
                src="https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              />
              <AvatarFallback>DM</AvatarFallback>
            </Avatar>
          </div>
          <div className="min-w-0 flex-1">
            <Card className="rounded-lg shadow-lg">
              <CardHeader className="p-4">
                <h4 className="font-medium">Born</h4>
                {/* <Badge className="mt-2">Important</Badge> */}
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  I was born on the 1st October 1999 in Derby, England
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-start space-x-3 text-sm">
          <div className="min-w-0 flex-1">
            <Card className="rounded-lg shadow-lg">
              <CardHeader className="p-4">
                <h4 className="font-medium">Event 2</h4>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  This is another description of the event.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <Avatar className="relative z-10 w-8 h-8">
              <AvatarImage
                alt="@janedoe"
                src="https://pbs.twimg.com/profile_images/1683098188637519872/IC1Vn69p_400x400.jpg"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
