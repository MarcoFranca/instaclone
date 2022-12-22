import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  Btn,
  BtnArea,
  Descricao, FeedContainer,
  HeaderFeed,
  HeaderImage,
  HeaderText,
  ImagePublc,
  Likers,
  NomeRodape,
} from "./feedStyled";


export default function Feed(props) {
  return (
    <FeedContainer>
        <HeaderFeed>
          <HeaderImage
            source={{ uri: props.feed.imgperfil }} />
          <HeaderText>{props.feed.nome}</HeaderText>
        </HeaderFeed>
      <ImagePublc
        recizeMode="cover"
        source={{uri: props.feed.imgPublicacao}} />
      <BtnArea>
        <TouchableOpacity>
          <Btn source={props.feed.likeada? require('../../images/likeada.png'): require('../../images/like.png') } />
        </TouchableOpacity>
        <TouchableOpacity>
          <Btn source={require('../../images/comment.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Btn source={require('../../images/send.png')} />
        </TouchableOpacity>
      </BtnArea>
      <Likers>{likers(props.feed.likers) } </Likers>
      <NomeRodape>{props.feed.nome} </NomeRodape>
      <Descricao>{props.feed.descricao } </Descricao>
    </FeedContainer>
  );
}

function likers(likers) {
    if(likers !== 0){
      if (likers > 1) {
        return `${likers} curtidas`
      }else{ return `${likers} curtida`
      }}
}
