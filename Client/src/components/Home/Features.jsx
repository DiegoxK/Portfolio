import React from "react";
import HorizontalCard from "../Micro Components/HorizontalCard";

function Features() {
  return (
    <div className="bg-dark text-white">
      <div className="container marketing">
        <hr className="featurette-divider mb-5" />
        <HorizontalCard
          title="Beautiful"
          span="Web Desings"
          img="/assets/features/webdevelopment.jpg"
          type="img-end"
        >
          I am a web designer and developer I made desings for you and your
          company, the best web interfaces in the world with the best web design
          services. I am a web designer and developer I made desings for you and
          your company, the best web interfaces in the world with the best web
          design services.
        </HorizontalCard>
        <hr className="featurette-divider my-5" />
        <HorizontalCard
          title="Management"
          span="Api"
          img="/assets/features/server.jpg"
          type="img-start"
        >
          Do you want to buil a secure server for your company? I can build it
          for you and secure your server. I can secure your server with a strong
          SSL and a strong firewall. I can secure your server with a strong SSL
          and a strong firewall. I can secure your server with a strong SSL and
          a strong firewall. I can secure your server with a strong SSL and a
          strong firewall. I can secure your server with a strong SSL and a
          strong firewall.
        </HorizontalCard>
        <hr className="featurette-divider my-5" />
        <HorizontalCard
          title="Networking and"
          span="CyberSecurity"
          img="/assets/features/code.jpg"
          type="img-end"
        >
          Do you want to buil a secure server for your company? I can build it
          for you and secure your server. I can secure your server with a strong
          SSL and a strong firewall. I can secure your server with a strong SSL
          and a strong firewall. I can secure your server with a strong SSL and
          a strong firewall. I can secure your server with a strong SSL and a
          strong firewall. I can secure your server with a strong SSL and a
          strong firewall.
        </HorizontalCard>
        <hr className="featurette-divider my-5" />
      </div>
    </div>
  );
}

export default Features;
