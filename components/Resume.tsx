
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 
export function Resume() {
  return (
    <Tabs defaultValue="experiences" className="w-[800px] h-auto text-white-1 grid md:grid-cols-2">
      <TabsList className="flex gap-4 flex-col w-full h-auto justify-start">
        <h1 className="text-3xl">Why hire me?</h1>
        <p className="max-w-[250px] text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus.</p>
        <TabsTrigger value="experiences" className="bg-black-2 w-[250px] p-0 hover:bg-secondColor py-2">Experiences</TabsTrigger>
        <TabsTrigger value="education" className="bg-black-2 w-[250px] p-0 hover:bg-secondColor py-2">Education</TabsTrigger>
        <TabsTrigger value="skills" className="bg-black-2 w-[250px] p-0 hover:bg-secondColor py-2">Skills</TabsTrigger>
        <TabsTrigger value="about_me" className="bg-black-2 w-[250px] p-0 hover:bg-secondColor py-2">About me</TabsTrigger>
      </TabsList>


      <TabsContent value="experiences">
        <h1></h1>
      <p> sapiente dignissimos ullam placeat, odit earum dolore ipsam odio ipsum, molestias quas architecto tenetur, exercitationem dicta. Repellat dolorem delectus sint perferendis. Rerum dolorem consectetur sint itaque deleniti aut dolor exercitationem, nesciunt laboriosam harum, aperiam consequatur sed! Laudantium, excepturi maiores? Quidem, ullam, vitae ratione deserunt maxime nam deleniti accusamus neque quas, necessitatibus atque consequuntur dicta harum? Distinctio, quod. Illo, molestiae ut eius consequuntur eos temporibus voluptas voluptatem esse corrupti ducimus sint ea porro optio repellat cupiditate sequi quae iste cumque facere perferendis? Nisi quasi accusantium eius quod impedit sit quibusdam.</p>
      </TabsContent>

      <TabsContent value="education">
        <p>Education</p>
      </TabsContent>
      <TabsContent value="skills">
        <p>Skill</p>
      </TabsContent>
      <TabsContent value="about_me">
        <h1 className="text-xl">About me</h1>
        <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi.
        Lorem ipsum dolor sit amet consectetur.
        </p>
      </TabsContent>

    </Tabs>
  )
}